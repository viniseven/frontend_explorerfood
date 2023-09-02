import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import { CaretLeft } from '@phosphor-icons/react';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';

import { Minus, Plus, Receipt } from '@phosphor-icons/react';

import { api } from '../../services/api';

export function Details() {
	const { user } = useAuth();
	const { admin } = user;
	const params = useParams();
	const navigate = useNavigate();
	const [dishe, setDishe] = useState();

	function handleBackPage() {
		navigate('/');
	}

	function handleEditDishePage(id) {
		navigate(`/editdishe/${id}`);
	}

	useEffect(() => {
		async function fetchDetailsDishe() {
			const response = await api.get(`/dishes/${params.id}`);
			setDishe(response.data);
		}

		fetchDetailsDishe();
	}, []);

	return (
		<Container>
			<Header />
			{dishe && (
				<main>
					<ButtonText
						icon={CaretLeft}
						title="voltar"
						onClick={handleBackPage}
					/>

					<div className="content-details-dishe">
						<img
							src={`${api.defaults.baseURL}/files/${dishe.img_dishe}`}
							alt="Imagem do prato"
						/>

						<div>
							<h1>{dishe.name}</h1>
							<p>{dishe.description}</p>

							{dishe.ingredients && (
								<div className="tag-ingredients">
									{dishe.ingredients.map((ingredient) => (
										<Tag key={ingredient.id} title={ingredient.ingredient} />
									))}
								</div>
							)}

							<div className="controls-dishe">
								{admin ? (
									<div className="edit-dishe">
										<Button
											title="Editar prato"
											onClick={() => handleEditDishePage(dishe.id)}
										/>
									</div>
								) : (
									<div className="choose-dishe">
										<div>
											<ButtonText icon={Minus} />
											01
											<ButtonText icon={Plus} />
										</div>

										<ButtonText icon={Receipt} title={`pedir - R$ 25,00`} />
									</div>
								)}
							</div>
						</div>
					</div>
				</main>
			)}

			<Footer />
		</Container>
	);
}
