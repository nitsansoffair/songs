import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        const { songs } = this.props;

        return songs.map((song) => {
            const { title } = song;
            const { selectSong } = this.props;

            return (
                <div className="item" key={title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { songs } = state;

    return {
        songs
    };
};

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);
