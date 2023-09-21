function CalendarIcon({ className = "" }) {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g clip-path="url(#clip0_780_1679)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.75 0C4.16421 0 4.5 0.335786 4.5 0.75V1.5H7.5V0.75C7.5 0.335786 7.83579 0 8.25 0C8.66421 0 9 0.335786 9 0.75V1.5H10C11.1046 1.5 12 2.39543 12 3.5V10C12 11.1046 11.1046 12 10 12H2C0.895431 12 0 11.1046 0 10V3.5C0 2.39543 0.895431 1.5 2 1.5H3V0.75C3 0.335786 3.33579 0 3.75 0ZM7.5 3V4.25C7.5 4.66421 7.83579 5 8.25 5C8.66421 5 9 4.66421 9 4.25V3H10C10.2761 3 10.5 3.22386 10.5 3.5V10C10.5 10.2761 10.2761 10.5 10 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V3.5C1.5 3.22386 1.72386 3 2 3H3V4.25C3 4.66421 3.33579 5 3.75 5C4.16421 5 4.5 4.66421 4.5 4.25V3H7.5Z"
					fill="currentColor"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_780_1679">
					<rect
						width="12"
						height="12"
						fill="white"
					></rect>
				</clipPath>
			</defs>
		</svg>
	);
}
export default CalendarIcon;
