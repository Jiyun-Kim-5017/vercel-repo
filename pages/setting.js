import Dropdown from "@/components/Dropdown";
import { useTheme } from "@/lib/ThemeContext";
import styles from "@/styles/Setting.module.css";

export default function Setting() {
    const { theme, setTheme } = useTheme();

    function handleDropdownChange(name, value) {
        const nextTheme = value;
        setTheme(nextTheme);
    }

    return (
        <div>
            <h1 className={styles.title}>설정</h1>
            {/* <section className={styles.section}>
                <h2 className={styles.sectionTitle}>테마 설정</h2>
                <Dropdown
                    className={styles.input}
                    name="theme"
                    value={theme}
                    onChange={handleDropdownChange}
                    options={[
                        { label: "라이트", value: "light" },
                        { label: "다크", value: "dark" },
                    ]}
                />
            </section> */}
        </div>
    );
}
