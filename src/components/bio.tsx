import { Box, Heading, Link, Text } from '@chakra-ui/react';
import meUrl from '../assets/me.png';

const Bio = () => (
	<>
		<Box
			h="80px"
			w="80px"
			border="3px solid black"
			borderRadius="50%"
			overflow="hidden"
			mb="1em"
			bgImage={meUrl}
			bgSize="cover"
		/>
		<Heading as="h1" letterSpacing="wide">
			Jack Davis
		</Heading>
		<Text>
			{' '}
			I'm a London-based{' '}
			<Link
				href="https://docs.publishing.service.gov.uk/manual/tech-lead-responsibilities.html"
				isExternal
			>
				tech lead
			</Link>
			.
		</Text>
	</>
);

export default Bio;
