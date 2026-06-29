import { IconSizeVariants, type IconProps } from "."

export const BrainedLogo = (props: IconProps) =>{
return <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  fill="none"
  stroke="currentColor"
  stroke-width="10"
  stroke-linecap="round"
  stroke-linejoin="round"
  className={IconSizeVariants[props.size]}
>
  {/* <!-- Left Half --> */}
  <path d="
    M88 22
    C70 18 60 28 60 40
    C42 36 26 48 26 66
    C14 70 10 90 22 102
    C10 120 20 142 42 144
    C46 160 62 172 80 166
    C88 170 96 164 96 152
    L96 28
    C96 24 92 22 88 22Z"/>

  <path d="M60 40C52 30 34 32 28 48"/>
  <path d="M28 66C18 66 14 76 18 84"/>
  <path d="M42 144C26 146 20 132 18 122"/>
  <path d="M52 82C42 84 38 94 42 102"/>

  {/* <!-- Right Half --> */}
  <path d="
    M112 22
    C130 18 140 28 140 40
    C158 36 174 48 174 66
    C186 70 190 90 178 102
    C190 120 180 142 158 144
    C154 160 138 172 120 166
    C112 170 104 164 104 152
    L104 28
    C104 24 108 22 112 22Z"/>

  <path d="M140 40C148 30 166 32 172 48"/>
  <path d="M172 66C182 66 186 76 182 84"/>
  <path d="M158 144C174 146 180 132 182 122"/>
  <path d="M148 82C158 84 162 94 158 102"/>

  {/* <!-- Details --> */}
  <circle cx="128" cy="74" r="2" fill="currentColor" stroke="none"/>
  <path d="M136 122C142 130 150 134 158 134"/>
</svg>
}
