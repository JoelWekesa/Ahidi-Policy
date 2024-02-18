import React, { FC } from 'react';

const MainText: FC<{ text: string }> = ({ text }) => {
	return <p className='mx-5 p-2 tracking-widest'>{text}</p>;
};

export default MainText;
