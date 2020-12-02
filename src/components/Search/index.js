import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import { InputSearch, SearchItem, SidebarButton, SearchHeader, SearchContainer, SearchContent } from './SearchElements';

const Search = ({ getQuery }) => {
	const [search, setSearch] = useState([]);
	const [value, setValue] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {}, [value]);

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		if (value.length < 3) {
			return;
		}
		setIsError(false);
		setIsLoading(true);
		try {
			const result = await Axios.get(
				`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${value}`
			);
			console.log(result.data);
			setSearch(result.data);
			setIsError(false);
		} catch (error) {
			console.error(error);
			setIsError(true);
		}
		setIsLoading(false);

		console.log(search);
	};

	return (
		<>
			<h1>Search</h1>
			<SearchContainer>
				<SearchHeader onSubmit={handleSubmit}>
					<InputSearch
						placeholder='search location'
						type='text'
						value={value}
						onChange={(evt) => setValue(evt.target.value)}
					/>
					<SidebarButton type='submit' onClick={() => setValue(value)}>
						Search
					</SidebarButton>
				</SearchHeader>
				<SearchContent>
					{isError && <div>Something went wrong ...</div>}
					{isLoading ? (
						<div>Loading...</div>
					) : (
						<ul>
							{search?.map((e, i) => (
								<SearchItem key={i} onClick={() => getQuery(e.woeid)}>
									{e.title}
								</SearchItem>
							))}
						</ul>
					)}
				</SearchContent>
			</SearchContainer>
		</>
	);
};

export default Search;
