import React, { FC } from 'react';

const SubText: FC<{ text: string }> = ({ text }) => {
	return <p className='mx-10 p-2 tracking-widest my-3'>{text}</p>;
};

export default SubText;
