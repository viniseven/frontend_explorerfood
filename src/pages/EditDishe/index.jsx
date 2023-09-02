import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { InputMarket } from '../../components/InputMarket';
import { TextArea } from '../../components/TextArea';

import { CaretLeft, UploadSimple } from '@phosphor-icons/react';

export function EditDishe() {
	const navigate = useNavigate();
	const params = useParams();

	const [image, setImage] = useState(null);
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [newIngredient, setNewIngredient] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	function handleBackPage() {
		navigate(-1);
	}

	function handleAddIngredient() {
		if (ingredients.includes(newIngredient)) {
			return alert('Esse ingrediente já foi inserido');
		}

		if (!newIngredient) {
			return alert('Por favor insira um ingrediente');
		}

		setIngredients((prevState) => [...prevState, newIngredient]);
		setNewIngredient('');
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredient) => ingredient !== deleted),
		);
	}

	async function handleUpdateDishe() {
		if (!name || !image || !category || !price || !description) {
			return alert('Por favor preencha todos os campos');
		}

		const fileUpload = new FormData();
		fileUpload.append('image', image);

		fileUpload.append(
			'data',
			JSON.stringify({
				name,
				category,
				ingredients,
				price,
				description,
			}),
		);

		await api
			.put(`/dishes/${params.id}`, fileUpload)
			.then(() => {
				navigate('/');
				alert('Prato atualizado com sucesso');
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert('Não foi possível atualizar prato, tente novamente');
				}
			});
	}
	useEffect(() => {
		async function fetchIngredients() {
			const response = await api.get(`/dishes/${params.id}`);
			const { ingredients } = response.data;
			const newArray = ingredients.map((ingredient) => ingredient.ingredient);
			setIngredients(newArray);
		}
		fetchIngredients();
	}, []);

	return (
		<Container>
			<Header isAdmin={true} />

			<main>
				<ButtonText icon={CaretLeft} title="voltar" onClick={handleBackPage} />

				<Form>
					<h1>Editar prato</h1>

					<fieldset>
						<div className="input-wrapper">
							<span>Imagem do prato</span>
							<div className="input-file">
								<UploadSimple size={34} />
								<label htmlFor="image">Selecione a imagem</label>
								<input
									type="file"
									accept="image/png, image/jpeg, image/svg"
									onChange={(e) => setImage(e.target.files[0])}
								/>
							</div>
						</div>

						<div className="input-wrapper">
							<label htmlFor="name">Nome</label>
							<input
								type="text"
								placeholder="Ex.: Salada Ceasar"
								id="name"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="input-wrapper">
							<label htmlFor="category">Categoria</label>

							<select
								name="category"
								id="category"
								onChange={(e) => setCategory(e.target.value)}
							>
								<option value="">Selecione uma Categoria</option>
								<option value="Refeicoes">Refeição</option>
								<option value="Sobremesas">Sobremesa</option>
								<option value="Bebidas">Bebida</option>
							</select>
						</div>
					</fieldset>

					<fieldset>
						<div className="input-wrapper">
							<label htmlFor="ingredient">Ingredientes</label>
							<div className="group-ingredients">
								{ingredients.map((ingredient, index) => (
									<InputMarket
										key={String(index)}
										value={ingredient}
										onClick={() => handleRemoveIngredient(ingredient)}
									/>
								))}

								<InputMarket
									isNew
									placeholder="Insira o ingrediente"
									value={newIngredient}
									onChange={(e) => setNewIngredient(e.target.value)}
									onClick={handleAddIngredient}
								/>
							</div>
						</div>

						<div className="input-wrapper">
							<label htmlFor="price">Preço</label>
							<input
								type="number"
								placeholder="R$ 00,00"
								id="price"
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
					</fieldset>

					<div className="input-wrapper">
						<label htmlFor="description">Descrição</label>
						<TextArea
							placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="buttom-footer-form">
						<Button title="Excluir prato" />
						<Button title="Salvar alterações" onClick={handleUpdateDishe} />
					</div>
				</Form>
			</main>
		</Container>
	);
}
