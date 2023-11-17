import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import { useState } from "react";
import { animated, useSpring } from "react-spring";

export const MovingTextBar = () => {

	const [key, setKey] = useState(1);

	const scrolling = useSpring({
		from: { transform: "translate(100%,0)" },
		to: { transform: "translate(-50%,0)" },
		config: { duration: 15000 },
		reset: true,
		// reverse: key % 2 == 0,
		onRest: () => {
			setKey(key + 1);
		}
	});

	return (
		<div key={key} style={{ borderTop: '1px solid white', borderBottom: '1px solid white', margin: '-8px', padding: '10px', overflow: 'hidden' }}>
			<animated.div style={{ whiteSpace: 'nowrap', overflow: 'hidden', ...scrolling }}>
				<Typography
					fontSize={26}
				>
					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>

					Get In Touch
					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>
					Lets Create Something
					<span style={{ color: '#abf129', marginLeft: '5px', fontStyle: 'italic' }}>
						Amazing
					</span>



					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>

					Get In Touch
					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>
					Lets Create Something
					<span style={{ color: '#abf129', marginLeft: '5px', fontStyle: 'italic' }}>
						Amazing
					</span>

					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>



					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>

					Get In Touch
					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>
					Lets Create Something
					<span style={{ color: '#abf129', marginLeft: '5px', fontStyle: 'italic' }}>
						Amazing
					</span>

					<CircleIcon
						fontSize='medium'
						sx={{ color: '#abf129', marginLeft: '20px', marginRight: '20px' }}
					/>
				</Typography>
			</animated.div>
		</div>
	);
};
