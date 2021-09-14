import React from "react";

export default props =>
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        autoComplete='off'
                        value={props.name}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite o nome...' />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        autoComplete='off'
                        value={props.email}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Digite o e-mail..." />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Birth Date</label>
                    <input type="date"
                        name="Birth-Date"
                        id="email"
                        className="form-control"
                        autoComplete='off'
                        value={props.birthDate}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Coloque a data de nascimento" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>StartDate</label>
                    <input type="date"
                        name="StartDate"
                        id="StartDate"
                        className="form-control"
                        autoComplete='off'
                        value={props.Date}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Data inicial" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label><CPF>CPF</CPF></label>
                    <input type="number"
                        name="CPF"
                        id="CPF"
                        className="form-control"
                        autoComplete='off'
                        value={props.CPF}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Coloque seu CPF" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Genders</label>
                    <input type="Gender"
                        name="Gender"
                        id="Gender"
                        className="form-control"
                        autoComplete='off'
                        value={props.Genders}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Qual é o seu genero ?" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label><Team>Team</Team></label>
                    <input type="Team"
                        name="Team"
                        id="team"
                        className="form-control"
                        autoComplete='off'
                        value={props.Team}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Coloque o nome do seu time." />
                </div>
            </div>
        </div>

        <hr />

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-success" onClick={props.save}>
                    <i className="fa fa-save mr-1"></i> Salvar
                </button>
                <button className="btn btn-danger ml-2" onClick={props.clear}>
                    <i className="fa fa-remove mr-1"></i> Cancelar
                </button>
            </div>
        </div>

    </div>