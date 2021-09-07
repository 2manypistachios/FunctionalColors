import {
  Box,
  useRadioGroup,
  useRadio,
  VStack,

} from "@chakra-ui/react"

import { colorTheory } from "@/utils/colors"

// Todo: Remove Recoil
import { useRecoilState } from "recoil"
import { colorSchemeState } from "../store/state"

//-- Zustand
import useStore from "@/store/useStore"

// @param nice
export default function ColorTypes() {
  const [scheme, setScheme] = useStore('scheme, setScheme')

  // const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState) // Todo: Remove

  const options = [...Object.keys(colorTheory),]

  const tempFunc = (v) => {
    setColorScheme(v);
    setScheme(v);
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "colorScheme",
    value: scheme,
    onChange: setScheme,
  })

  const group = getRootProps()

  return (
    <Box mt="1rem">
      <VStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </VStack>
    </Box>
  )
}

export const RadioCard = ({children, ...props}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" width="100%">
      <input {...input} />
      <Box
        {...checkbox}

        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
}