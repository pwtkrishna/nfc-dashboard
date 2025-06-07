export async function login(
  email: string,
  password: string,
  userType: string,
  loginType: string
) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      user_type: userType,
      login_type: loginType,
    }),
  });
  const data = await res.json();
  //   if (res.status === 403 && data.proceed_otp) {
  //   }
  return data;
}
