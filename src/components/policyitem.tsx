import React, { FC } from 'react';

const PolicyItem: FC<{ title: string; description: string }> = ({
	title,
	description,
}) => {
	return (
		<div className='my-6'>
			<p className='font-bold underline tracking-widest my-4'>{title}</p>{' '}
			<p className='tracking-widest'>{description}</p>{' '}
		</div>
	);
};

export default PolicyItem;

export const PolicyItemN: FC<{ title: string; description: string }> = ({
	title,
	description,
}) => {
	return (
		<div className='my-6'>
			<p className='font-bold tracking-widest my-4'>{title}</p>{' '}
			<p className='tracking-widest'>{description}</p>{' '}
		</div>
	);
};
