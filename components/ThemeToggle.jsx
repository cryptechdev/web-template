import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import daisyuiThemes from "styles/daisyui-themes.json";

const themes = Object.keys(daisyuiThemes) || [""];
export const defaultTheme = themes[0];

function ThemeToggle() {
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    themeChange(false);
    setTheme(
      document.documentElement.getAttribute("data-theme") || defaultTheme
    );
  }, []);

  return (
    <div className="form-control lg:mr-4 md:ml-auto">
      <label className="cursor-pointer label">
        <span className="label-text">
          <span className="fad fa-sun text-yellow-300"></span>
        </span>
        <input
          type="checkbox"
          className="toggle toggle-secondary mx-1"
          data-toggle-theme={themes.join(",")}
          data-act-class="active"
          checked={theme !== themes[0]}
          onClick={() =>
            setTheme(theme !== defaultTheme ? defaultTheme : themes[1])
          }
          readOnly
        />
        <span className="label-text">
          <span className="fad fa-moon text-blue-700"></span>
        </span>
      </label>
    </div>
  );
}

export default ThemeToggle;
