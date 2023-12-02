import {useEffect, useState} from 'react';
import {Box, VStack, SlideFade} from '@chakra-ui/react';
import Bio from './components/bio';
import SocialLinks from './components/social-links';
import ExperienceLinks from './components/experience-links';
import Divider from './components/divider';

function App() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	});

	return (
		<Box background="#F3CFC6">
			<SlideFade
				in={loaded}
				transition={{enter: {duration: 1.2, easing: 'ease-out'}}}
				offsetY="25px"
			>
				<VStack
					spacing={['1em', '1.8em']}
					align="flex-start"
					justify="center"
					h="100vh"
					w="80%"
					m="0 auto"
					maxW="600px"
				>
					<Bio />
					<ExperienceLinks />
					<Divider />
					<SocialLinks />
				</VStack>
			</SlideFade>
		</Box>
	);
}

export default App;
