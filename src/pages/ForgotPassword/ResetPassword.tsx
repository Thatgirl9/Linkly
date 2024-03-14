import { supabase } from "../../config/supabaseClient.js";

export async function sendPasswordResetEmail(email: any) {
  const { error } = await supabase.auth.sendPasswordResetEmail(email);

  if (error) {
    console.error("Error sending password reset email:", error);
  } else {
    console.log("Password reset email sent");
  }
}

export async function updatePassword(newPassword: string, resetCode: string) {
  const { user, error } = await supabase.auth.updateUser(
    {
      password: newPassword,
    },
    {
      data: {
        email_confirmation_code: resetCode,
      },
    }
  );
  if (error) {
    console.error("Error updating password:", error);
  } else {
    console.log("Password updated", user);
  }
}
