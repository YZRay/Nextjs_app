import { useEffect, useState } from "react";
import { Button, Switch } from "@nextui-org/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;
  return (
    // <Switch
    //   defaultSelected={resolvedTheme === "dark"}
    //   onChange={handleThemeChange}
    //   size="lg"
    //   color="default"
    //   thumbIcon={({ isSelected, className }) =>
    //     isSelected ? (
    //       <IoMdMoon className={className} />
    //     ) : (
    //       <IoMdSunny className={className} />
    //     )
    //   }
    // ></Switch>
    <>
      <Button
        className={`w-10 h-10 rounded-xl p-2 border ${
          resolvedTheme === "light" ? "border-slate-700" : "border-slate-400"
        }`}
        onClick={handleThemeChange}
        variant="bordered"
        color={resolvedTheme === "dark" ? "warning" : "primary"}
      >
        {resolvedTheme === "dark" ? (
          <IoMdSunny className="w-5 h-50" />
        ) : (
          <IoMdMoon className="w-5 h-5" />
        )}
      </Button>
    </>
  );
}