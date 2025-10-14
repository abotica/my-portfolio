'use client'
import ThemeDropdown from '@/components/ui/ThemeDropdown';
import { useTheme } from '@/lib/hooks/useTheme'
import { Theme } from '@/types';
import { useState } from 'react';

export default function Home() {
	const [index, setIndex] = useState(0);
	const { theme, setTheme } = useTheme();
	const array:Theme[] = ["light", "dark", "bumblebee", "business"];

	const handleOnClick = () => {
		if (index === array.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}

	return (
		<>
		{/* Test */}
			<div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
				<ThemeDropdown />
				<button className='bg-[#ffffff] border-2' onClick={() => {setTheme(array[index]); handleOnClick();}}>TOUCH ME</button>
				<button className="btn-primary font-bold text-xl">Primary</button>
				<button className="btn-secondary">Secondary</button>
			</div>
		</>
	)
}
