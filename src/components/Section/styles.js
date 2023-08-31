import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	z-index: auto;

	position: relative;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

	h2 {
		font-size: 1.8rem;
		font-weight: 500;
		margin-left: 2.4rem;
	}
`;
