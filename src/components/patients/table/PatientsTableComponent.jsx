import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';

import api from '../../../services/api';
import { API_URI, NATIONALITIES, GENDER } from '../../../core/constants';
import { TableRowComponent } from '../../../components/patients/tableRowComponent/TableRowComponent';
import {
  StyledTableCell,
  patientTableStyles,
} from './PatientsTableComponent.style';

export default function PatientsTable() {
  const classes = patientTableStyles();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredNationality, setFilteredNationality] = useState('');
  const [filteredGender, setFilteredGender] = useState('');
  const [resetQuery, setResetQuery] = useState(false);

  function fetchData() {
    if (!loading && !search.length) {
      setLoading(true);
      let params = `&page=${page}`;
      if (filteredGender.length) params = params + `&gender=${filteredGender}`;
      if (filteredNationality.length)
        params = params + `&nat=${filteredNationality}`;

      console.log('params ->', params);
      api
        .get(`${API_URI}${params}`)
        .then(({ data }) => {
          const { results } = data;
          const listUsers = [...(resetQuery ? [] : users), ...results];
          setUsers(listUsers);
          setLoading(false);
          if (page > 1) {
            window.history.pushState(
              `page${page}`,
              document.title,
              `/?page=${page}`
            );
          }
        })
        .catch((error) => {
          console.log('Erro ao carregar: ', error);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    if (resetQuery) {
      setPage(1);
      setUsers([]);
      setResetQuery(!resetQuery);
    }
  }, [resetQuery]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    fetchData();
  }, [page, filteredGender, filteredNationality]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight &&
      page <= totalPages &&
      !loading &&
      !search.length
    ) {
      setPage(page + 1);
    }
  }

  const filteredUsers = () => {
    if (!!search.length) {
      const searchLowerCase = search.toLocaleLowerCase();
      const newUserList = users.filter(({ name }) => {
        const { title, first, last } = name || {};
        return (
          title.toLowerCase().indexOf(searchLowerCase) > -1 ||
          first.toLowerCase().indexOf(searchLowerCase) > -1 ||
          last.toLowerCase().indexOf(searchLowerCase) > -1
        );
      });
      return newUserList;
    } else {
      return users;
    }
  };

  function handleFilters({ target }) {
    if (target.name === 'male' || 'Gender') {
      if (target.value !== filteredGender) {
        setResetQuery(true);
      }
      setFilteredGender(target.value);
    } else if (target.name === 'Nationality') {
      if (target.value !== filteredNationality) {
        setResetQuery(true);
      }
      setFilteredNationality(target.value);
    } else if (target.name === 'Search') {
      setSearch(target.value);
    }
  }

  function renderTableHeaderCells() {
    return [...arguments].map((value, index) => {
      return (
        <StyledTableCell className={classes.cell} align='center' key={index}>
          {value}
        </StyledTableCell>
      );
    });
  }

  return (
    <>
      <div className={classes.searchAndFilters}>
        <input
          className={classes.inputAndSelect}
          name='Search'
          type='text'
          value={search}
          onChange={handleFilters}
          placeholder=' Search...'
        />

        <div className={classes.filtersContainer}>
          <p className={classes.filtersTitle}>Gender Filter</p>
          <select
            name='Gender'
            onChange={handleFilters}
            value={filteredGender}
            className={classes.inputAndSelect}
          >
            <option value=''>All</option>
            {GENDER.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.filtersContainer}>
          <p className={classes.filtersTitle}>Nationality Filter</p>
          <select
            name='Nationality'
            onChange={handleFilters}
            value={filteredNationality}
            className={classes.inputAndSelect}
          >
            <option value=''>All</option>
            {NATIONALITIES.map((nat) => (
              <option key={nat} value={nat}>
                {nat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table size='small' aria-label='a dense customized table' stickyHeader>
          <TableHead>
            <TableRow>
              {renderTableHeaderCells(
                'Patient',
                'Gender',
                'Nationality',
                'Details'
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers().map((item, index) => (
              <TableRowComponent key={index} user={item} />
            ))}
            {loading && (
              <tr>
                <td align='center' colSpan='4'>
                  <div className={classes.loading}>
                    <LoopIcon fontSize='medium' /> Loading...
                  </div>
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

{
}
