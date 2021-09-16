import { Box, Grid, GridItem, Heading, Text, Square, useColorModeValue, Container, Flex } from "@chakra-ui/react";

import Image from 'next/image'
import Gif from '/public/colorFuncGif.gif'


const Demo = () => {
  const horizRem = 5, horizMulti = 8, vertRem = 8, vertMulti = 4

  return (
    <Box bg={useColorModeValue("blue.200", "blue.700")} color={useColorModeValue('blackAlpha.800', 'bright')}>
      <Grid templateColumns="2fr 4fr 2fr" templateRows="auto repeat(2, 5rem 1fr)"
        maxW="80rem"
        ml="auto"
        mr="auto"
        pl={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pr={`calc(${horizRem}rem + (${horizMulti - horizRem}) * ((100vw - 20rem)/ (100 - 20)))`}
        pt={`calc(${vertRem}rem + (${vertMulti - vertRem}) * ((100vw - 20rem)/ (100 - 20)))`}
      >
        <GridItem colStart={2} w="100%" h="100px">
          <Heading size="lg" mb="1rem">Powerful Editing</Heading>
          <Text size="lg">Right in your browser, no designer or software needed</Text>
        </GridItem>

        <GridItem rowStart={3} w="100%" p="1rem">
          <Heading size="sm" mb="1rem">Quick 3 Step Process</Heading>
          <Text size="sm">Pick your hues, generate your shades, and export in minutes.</Text>
        </GridItem>
        
        <GridItem rowStart={5} w="100%" p="1rem">
          <Heading size="sm" mb="1rem">Extensive configuration</Heading>
          <Text size="sm">Reduce your abstractions</Text>
        </GridItem>

        <GridItem rowStart={3} colStart={3} w="100%" p="1rem">
          <Heading size="sm" mb="1rem">Progressive labeling</Heading>
          <Text size="sm">Understand your palette</Text>
        </GridItem>

        <GridItem rowStart={3} rowSpan={10} colStart={2} w="100%" h="calc(100% + 50px)">
          <Image src={Gif} fill="layout" />
        </GridItem>

      </Grid>
    </Box>
  )
}

export default Demo;