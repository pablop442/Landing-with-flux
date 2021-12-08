//Import React
import React from "react";

const SearchBar = props => {
	return (
		<div className="container rounded bg-secondary bg-opacity-25 ">
			<form className="row gx-3 gy-2 align-items-center my-3 py-3">
				<div className="col-sm-3">
					<label className="visually-hidden" htmlFor="specificSizeInputName">
						Origin
					</label>
					<input type="text" className="form-control" id="specificSizeInputName" placeholder="Origin" />
				</div>
				<div className="col-sm-3">
					<label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
						Destination
					</label>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							id="specificSizeInputGroupUsername"
							placeholder="Destination"
						/>
					</div>
				</div>
				<div className="col-sm-3">
					<label className="visually-hidden" htmlFor="specificSizeSelect">
						Preference
					</label>
					<select className="form-select" id="specificSizeSelect">
						<option selected>Choose your class</option>
						<option value="1">Tourist</option>
						<option value="2">Bussiness</option>
						<option value="3">First</option>
					</select>
				</div>
				<div className="col-auto">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="autoSizingCheck2" />
						<label className="form-check-label" htmlFor="autoSizingCheck2">
							Only direct flights
						</label>
					</div>
				</div>
				<div className="col-auto">
					<button type="submit" className="btn btn-info">
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
