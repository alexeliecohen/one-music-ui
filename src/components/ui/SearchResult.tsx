import React from 'react';
export interface ISearch {
    title:string;
    album:string;
    link: string;
}
export interface ISearchResults  {
    items: Array<ISearch>
}
const SearchItem = (props: ISearch) => {
    return (
      <li>

      </li>
    );

}
const SearchResult = (props: ISearchResults) => {
    return (
        <div>
            <ul>
                {
                    props.items.map(
                        (item) => {return <SearchItem {...item}/>}
                    )
                }
            </ul>

        </div>
    );
};

export default SearchResult;