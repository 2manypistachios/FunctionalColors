import { Heading } from "@chakra-ui/react"
import { SketchPicker } from "react-color"
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react"

import ColorScheme from "@/elements/ColorScheme"

import { huesState, startingColorState } from "../state"
import { useRecoilState, useRecoilValue } from "recoil"

import Color from "color"

const Hues = () => {
  const [startingColor, setStartingColor] = useRecoilState(startingColorState)
  const hues = useRecoilValue(huesState)
  
  return (
    <>
      <Heading mb="1.2em">Primary Color</Heading>
      <SketchPicker disableAlpha={true} presetColors={Object.values(hues).map((v) => v.hex())} color={startingColor.hex()} onChange={(val) => setStartingColor(Color(val.hex))} />
      <ColorScheme />
    </>
  )
}

const CustomHues = (props) => {
  return (
    <FormControl id="color-picker" display="flex" flexDirection="column">
      <FormLabel>Custom Hues</FormLabel>
      <Input placeHolder="weee" />
      <FormHelperText mb="1.2em">{`Will generate some stuff shades`}</FormHelperText>
    </FormControl>
  )
}

const CustomScheme = (props) => {
  return (
    <FormControl id="color-picker" display="flex" flexDirection="column">
      <FormLabel>Custom Scheme Function</FormLabel>
      <Input placeHolder="weee" />
      <FormHelperText mb="1.2em">{`Will generate some stuff shades`}</FormHelperText>
    </FormControl>
  )
}

export default Hues;