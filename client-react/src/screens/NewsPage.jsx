
import React, { Component } from 'react';
import SearchBar from "../components/SearchBar";
import NavbarContent from "../components/NavbarContent";
import NewsContent from "../components/NewsContent";
import NewsSorter from '../components/NewsSorter';
import Pagination from "../components/Pagination";
import landingPage from '../json/landingPage.json';

export default class NewsPage extends Component {
    render() {
        return (
            <>
               
                <SearchBar></SearchBar>
                <NavbarContent {...this.props}></NavbarContent>
                <NewsSorter />
                <NewsContent data={landingPage.categories} />
                <Pagination />

   

            </>
        )
    }
}
