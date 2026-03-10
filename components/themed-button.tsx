import { useThemeColor } from "@/hooks/use-theme-color";
import { Button, ButtonProps, View } from "react-native";

export type ThemedButtonProps = ButtonProps & {
    lightColor?: string;
    darkColor?: string;
}

function ThemedButton({ lightColor, darkColor, ...props }: ThemedButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');

    return (
        <View style={{ borderStyle: "solid", borderWidth: 2, borderColor: backgroundColor, borderRadius: 4 }}>
            <Button {...props}
                color={backgroundColor}
            />
        </View>

    );
}

export default ThemedButton;