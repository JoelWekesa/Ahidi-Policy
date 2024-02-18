import React, { FC } from 'react';

const Numbered: FC<{ item: string }> = ({ item }) => {
	return (
		<div className='my-3'>
			<p className='tracking-widest'>{item}</p>{' '}
		</div>
	);
};

export default Numbered;
