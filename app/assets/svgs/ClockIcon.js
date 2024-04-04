import { Svg, Path, G } from "react-native-svg";

export function ClockIcon({ color = "#fff", height = 22, width = 22 }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="li:clock">
        <Path
          id="Vector (Stroke)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.2998 3C7.32924 3 3.2998 7.02944 3.2998 12C3.2998 16.9706 7.32924 21 12.2998 21C17.2704 21 21.2998 16.9706 21.2998 12C21.2998 7.02944 17.2704 3 12.2998 3ZM1.2998 12C1.2998 5.92487 6.22467 1 12.2998 1C18.3749 1 23.2998 5.92487 23.2998 12C23.2998 18.0751 18.3749 23 12.2998 23C6.22467 23 1.2998 18.0751 1.2998 12Z"
          fill={color}
        />
        <Path
          id="Vector (Stroke)_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.2998 5C12.8521 5 13.2998 5.44772 13.2998 6V11.382L16.747 13.1056C17.241 13.3526 17.4412 13.9532 17.1942 14.4472C16.9472 14.9412 16.3466 15.1414 15.8526 14.8944L11.8526 12.8944C11.5138 12.725 11.2998 12.3788 11.2998 12V6C11.2998 5.44772 11.7475 5 12.2998 5Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}
