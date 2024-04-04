import { Svg, Path, G } from "react-native-svg";

export function SearchIcon({ color = "#fff", height = 22, width = 22 }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="li:search">
        <Path
          id="Vector (Stroke)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.6997 4C7.83371 4 4.69971 7.13401 4.69971 11C4.69971 14.866 7.83371 18 11.6997 18C15.5657 18 18.6997 14.866 18.6997 11C18.6997 7.13401 15.5657 4 11.6997 4ZM2.69971 11C2.69971 6.02944 6.72914 2 11.6997 2C16.6703 2 20.6997 6.02944 20.6997 11C20.6997 15.9706 16.6703 20 11.6997 20C6.72914 20 2.69971 15.9706 2.69971 11Z"
          fill={color}
        />
        <Path
          id="Vector (Stroke)_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6425 15.9429C17.033 15.5524 17.6662 15.5524 18.0567 15.9429L22.4067 20.2929C22.7972 20.6834 22.7972 21.3166 22.4067 21.7071C22.0162 22.0977 21.383 22.0977 20.9925 21.7071L16.6425 17.3571C16.252 16.9666 16.252 16.3334 16.6425 15.9429Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}