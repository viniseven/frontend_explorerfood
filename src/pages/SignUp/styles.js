import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;

	display: flex;
 	justify-content: center;
	gap: 7.3rem;
	flex-direction: column;

	.brand {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		img {
			width: 43px;
			height: 43px;
		}
	}

	@media (min-width: 1024px) {
		flex-direction: row;

		align-items: center;

		.brand {
			h1 {
				white-space: nowrap;
			}
		}
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	align-items: center;

	h1 {
		display: none;
	}

	.input-wrapper {
		width: 100%;
	}

	.btn-signin {
		font-size: 1.4rem;
		font-weight: 500;
	}

	@media (min-width: 1024px) {
		padding: 6.4rem;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		border-radius: 16px;

		width: 47.6rem;
		height: auto;

		h1 {
			display: block;
		}
	}
`;
