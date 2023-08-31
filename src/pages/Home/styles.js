import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;

	display: grid;

	main {
		margin: 0 auto;

		max-width: 100%;

		overflow-x: hidden;

		.text-header {
			background: ${({ theme }) => theme.GRADIENT.GRAD_200};

			border-radius: 3px;

			display: flex;

			margin: 4.4rem 1.6rem 0 0;

			height: 12rem;

			img {
				position: relative;
				right: 30px;
				bottom: 40px;

				width: 19.1rem;
				height: 15.9rem;
			}

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;

				margin-right: 10rem;

				h1 {
					font-size: clamp(1.125rem, -0.187rem + 5.598vw, 3.3rem);
					font-weight: 600;
					line-height: 25.2px;

					margin-bottom: 3px;
				}

				p {
					font-size: clamp(0.75rem, 0.5115rem + 1.0178vw, 1.6rem);
					font-weight: 400;
					font-family: ${({ theme }) => theme.FONTS.ROBOTO};
					line-height: 16px;
				}
			}
		}

		.content-sections::before {
			content: '';

			display: block;

			position: relative;

			height: 4.9rem;

			background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
		}

		@media (min-width: 768px) {
			.text-header {
				height: 18rem;

				margin-top: 10rem;

				img {
					width: 32.2rem;
					height: 21.6rem;
				}

				div {
					h1 {
						margin-bottom: 8px;
					}
				}
			}

			@media (min-width: 1024px) {
				.text-header {
					height: 26rem;

					margin-top: 16rem;

					div {
					}

					img {
						width: 63.2rem;
						height: 40.6rem;

						position: relative;
						bottom: 110px;
					}
				}
			}
		}
	}
`;
