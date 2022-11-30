import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import daisyuiThemes from "styles/daisyui-themes.json";
import { useRecoilState } from "recoil";
import { themeState } from "state/themeState";

const themes = Object.keys(daisyuiThemes) || [""];
export const defaultTheme = themes[0];

function ThemeToggle() {
  const [, setMuiTheme] = useRecoilState(themeState);
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    themeChange(false);
    const t =
      document.documentElement.getAttribute("data-theme") || defaultTheme;
    setTheme(t);
    setMuiTheme(t);
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
          onClick={() => {
            const t = theme !== defaultTheme ? defaultTheme : themes[1];
            setTheme(t);
            setMuiTheme(t);
          }}
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
