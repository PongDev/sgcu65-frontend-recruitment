import { FormEvent } from "react";

function RegisterForm() {
  const verifyComfirmPassword = () => {
    const password = document.getElementById("password") as HTMLInputElement;
    const confirmPassword = document.getElementById(
      "confirm-password"
    ) as HTMLInputElement;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("ยืนยันรหัสผ่านไม่ตรงกับรหัสผ่าน");
      confirmPassword.reportValidity();
      return false;
    }
    confirmPassword.setCustomValidity("");
    confirmPassword.reportValidity();
    return true;
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!verifyComfirmPassword()) return false;
    const result = await fetch("http://isd-test.cucheck.in/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: (document.getElementById("username") as HTMLInputElement)
          .value,
        name: (document.getElementById("name") as HTMLInputElement).value,
        surname: (document.getElementById("surname") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement)
          .value,
      }),
    });

    if (result.status === 201) {
      const successPopup = document.getElementById("success-popup");

      if (successPopup) {
        successPopup.innerHTML = "ลงทะเบียนสำเร็จ";
        successPopup.style.display = "block";
        setTimeout(() => {
          successPopup.innerHTML = "";
          successPopup.style.display = "none";
        }, 3000);
      }
    } else {
      const errorPopup = document.getElementById("error-popup");

      if (errorPopup) {
        errorPopup.innerHTML =
          "เกิดข้อผิดพลาด: " + (await result.json()).message;
        errorPopup.style.display = "block";
        setTimeout(() => {
          errorPopup.innerHTML = "";
          errorPopup.style.display = "none";
        }, 3000);
      }
    }
  };

  return (
    <div className="flex-container">
      <form
        className="input-form"
        onSubmit={(e) => {
          return submitForm(e);
        }}
      >
        <h1>ลงทะเบียน</h1>
        <h6>กรุณากรอกข้อมูลให้ครบถ้วน</h6>
        <input id="name" type="text" placeholder=" ชื่อ" required />
        <input id="surname" type="text" placeholder=" นามสกุล" required />
        <input
          id="username"
          type="text"
          placeholder=" ชื่อผู้ใช้"
          pattern="[A-Za-z0-9]+"
          title="ชื่อผู้ใช้ต้องประกอบไปด้วย A-Z, a-z หรือ 0-9 เท่านั้น"
          required
        />
        <input id="email" type="email" placeholder=" อีเมล" required />
        <input id="password" type="password" placeholder=" รหัสผ่าน" required />
        <input
          id="confirm-password"
          type="password"
          placeholder=" ยืนยันรหัสผ่าน"
          required
          onInput={() => verifyComfirmPassword()}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegisterForm;
