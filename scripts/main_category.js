const action_buttons = document.querySelectorAll(".row_button_category button");
let selected_button = null;

action_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // اگر دکمه قبلی وجود داشته باشد، استایل های قبلی را حذف کنید
        if (selected_button) {
            selected_button.style.background = "";
            selected_button.style.border = "";
            selected_button.style.fontWeight = "";
        }

        // اعمال استایل های جدید به دکمه کلیک شده
        button.style.background = "#ffc300";
        button.style.border = "1px solid #FFD429";
        button.style.fontWeight = "500";

        // ذخیره دکمه جدید به عنوان دکمه انتخاب شده
        selected_button = button;
    });
});
