import {SiRust, SiCoffeescript, SiHtml5} from 'react-icons/si'
import {BiLogoVuejs, BiLogoJavascript, BiLogoTypescript, BiLogoPython, BiLogoCss3} from 'react-icons/bi'
import {VscTerminalPowershell} from 'react-icons/vsc'
import { IconType } from 'react-icons'

export const langIconMap: Map<string, IconType> = new Map([
  ['Vue', BiLogoVuejs],
  ['JavaScript', BiLogoJavascript],
  ['Rust', SiRust],
  ['TypeScript', BiLogoTypescript],
  ['Python', BiLogoPython],
  ['CoffeeScript', SiCoffeescript],
  ['HTML', SiHtml5],
  ['CSS', BiLogoCss3],
  ['Shell', VscTerminalPowershell],
])