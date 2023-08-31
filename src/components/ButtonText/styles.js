import styled from 'styled-components';

export const Container = styled.button`
	background-color: transparent;

	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	line-height: 33.6px;
	font-size: 2.4rem;

	color: ${({ theme }) => theme.COLORS.WHITE};

	display: flex;
	align-items: center;

	border: 0;
`;
