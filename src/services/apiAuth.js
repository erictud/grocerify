import supabase from "./supabase";

export async function signup({ username, email, password, pfp }) {
  // 1. Create user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username, pfp: "" },
    },
  });

  if (error?.message === "User already registered")
    throw new Error("Cannot create new account! Email already in use!");
  else if (error) throw new Error("Cannot create new account! Please try again!");

  if (!pfp) return { data };

  // 2. If there is an pfp:
  const { id: userId } = data.user;
  const pfpName = `pfp-user-${userId}`;

  // 2a) upload the pfp
  const { error: avatarError } = await supabase.storage.from("pfps").upload(pfpName, pfp);
  if (avatarError) throw new Error("Could not upload avatar! Please try again!");

  // 2b) pass the pfp link in the user
  const pfpPath = `https://zrktgvcemtedvxffdorf.supabase.co/storage/v1/object/public/pfps/${pfpName}`;
  const { error: uploadPfpToUserError, data: newUserData } = await supabase.auth.updateUser({
    data: {
      pfp: pfpPath,
    },
  });
  if (uploadPfpToUserError) throw new Error("Could not upload pfp to user! Please try again!");

  return { newUserData };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw new Error("Cannot log in! Invalid credentials!");

  return { data };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
