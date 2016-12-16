import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    xhr() {
        var xhr = new XMLHttpRequest();
        // var url = 'https://github.com/kg6ka/res/blob/master/app/views/items/items.json';
        xhr.open('GET', '/api/list.json', true);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if(xhr.readyState !== 4) return;
            if(xhr.status !== 200) {
                console.log(xhr.getResponseHeader());
                console.log(xhr.status + xhr.statusText);
                return
            }

            console.log(xhr.responseText);
        };

        xhr.send();

    }
    render() {
        const { year, photos, fetching } = this.props;
        return <div>
            <p>
                <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
                <button onClick={::this.onYearBtnClick}>2014</button>
                <button onClick={::this.xhr}>xhr</button>
            </p>
            <h3>{year} год</h3>te
            {
                fetching ?
                    <p>Загрузка...</p>
                    :
                    <p>У тебя {photos.length} фото.</p>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};