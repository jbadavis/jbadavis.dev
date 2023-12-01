import {Heading, Divider, Text, Link, VStack} from '@chakra-ui/react';
import SocialLinks from './components/social-links';
import ExperienceLinks from './components/experience-links';

function App() {
	return (
		<VStack
			spacing="1em"
			align="flex-start"
			justify="center"
			h="100vh"
			w="80%"
			m="0 auto"
			maxW="600px"
		>
			<Heading letterSpacing="wide" textTransform="uppercase">
				Jack Davis
			</Heading>
			<Divider borderColor="black" w="50%" />
			<Text>
				I'm a London-based developer working at{' '}
				<Link href="https://planes.studio" isExternal>
					Planes ✈️
				</Link>
				.
			</Text>
			<ExperienceLinks />
			<Divider borderColor="black" w="50%" />
			<SocialLinks />
		</VStack>
	);
}

export default App;
