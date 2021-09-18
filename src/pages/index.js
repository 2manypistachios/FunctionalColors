import { Container, Heading, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import PageContainer from 'src/components/layouts/PageContainer';
import Actions from 'src/components/modules/Actions';

import CircleShift from 'src/components/elements/CircleShift';
import Features from 'src/components/elements/Features'
import Demo from 'src/components/elements/Demo'
import LatestPalattes from 'src/components/elements/LatestPalattes'
import SvgLogoText from 'src/components/elements/SVGLogoText';
import { getPublicSnippets } from 'src/utils/Fauna';

export default function Home({ snippets }) {

  return (
    <PageContainer title="Color/Func">
      <Flex flexDirection="row" minHeight="94vh" wrap="wrap-reverse" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Flex flex="1" flexDirection="column" alignItems="center" justifyContent="space-around">
          <SvgLogoText size={90} colors={useColorModeValue(['blue.500','purple.500'],['blue.400','purple.500'])} />
          <Container textAlign="center">
            <Heading mb="1rem">Functional Color Design.</Heading>
            <Text>Express your theme in one simple equation.</Text>
          </Container>
          <Actions switchName="Editor" />
        </Flex>
        <Flex flex="1" minW="300px" minH="400px" alignItems="center" justifyContent="center">
          <CircleShift bg={useColorModeValue('gray.50', 'gray.900')} />
        </Flex>
      </Flex>
      <Features />
      <Demo />
      {snippets && <LatestPalattes snippets={snippets} />}
    </PageContainer>
  );
}

export async function getStaticProps() {
  try {
    const snippets = await getPublicSnippets()
    return { props: {snippets} }
  } catch (err) {
    console.warn(err)
    return { notFound: false }
  }
}

