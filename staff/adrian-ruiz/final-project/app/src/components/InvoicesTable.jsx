import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { toaster } from 'evergreen-ui'
import DeleteDialog from './DeleteDialog'
import { deleteInvoice } from '../logic'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Customer name',
    },
    {
        id: 'invoiceNumber',
        numeric: false,
        disablePadding: false,
        label: 'Invoice N#',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'balance',
        numeric: true,
        disablePadding: false,
        label: 'Balance',
    },
    {
        id: 'amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow
                sx={{
                    "& th": {
                        fontSize: "1.8rem",
                        fontWeight: "bold"
                    }
                }}>
                {headCells.map((headCell) => (
                    <TableCell

                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell padding="checkbox">
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected, handleDeleteClick } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{
                        flex: '1 1 100%',
                        fontSize: "2rem"
                    }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Invoices
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={handleDeleteClick}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({ data, onDeleteInvoice }) {

    const rows = data

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('stock');
    const [selected, setSelected] = React.useState(undefined);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(rows.length);
    const [isShown, setIsShown] = React.useState(false);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = undefined;
            setSelected(newSelected);
            return;
        }
        return
    };

    const handleClick = (event, name) => {
        let newSelected
        selected === name ? newSelected = null : newSelected = name
        setSelected(newSelected);
    };

    const handleDeleteClick = () => {
        setIsShown(true)

    }

    const confirmDeleteClick = () => {
        
        let invoiceFound = rows.find(row => {
            if (row.invoiceNumber === selected) {
                return row
            }
        })

        if (!invoiceFound) throw new Error('Invoice selected not found')

        ; (async () => {
            try {
                await deleteInvoice(sessionStorage.UserToken, invoiceFound.id)
                toaster.success(`Invoice ${invoiceFound.InvoiceNumber} deleted successfully`)

                onDeleteInvoice()
                setIsShown(false)
                setSelected(undefined)
            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }

    const handleCancelClick = () => {
        setIsShown(false)
    }

    const isSelected = (name) => selected === name;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <>
            {selected && <DeleteDialog status={isShown} item={'invoice'} title={`Delete invoice Number ${selected}`} onConfirm={confirmDeleteClick} onCancelClick={handleCancelClick} />}
            <Box sx={{ width: '100%', height: '100%' }}>
                <Paper sx={{ width: '100%', height: '100%', mb: 2, overflow: 'hidden' }}>
                    <EnhancedTableToolbar numSelected={selected ? 1 : 0} handleDeleteClick={handleDeleteClick} />
                    <TableContainer
                        sx={{
                            maxHeight: '90vh',
                            maxWidth: '90vw'
                        }}
                    >
                        <Table stickyHeader
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected ? 1 : 0}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.invoiceNumber);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                sx={{
                                                    "& th": {
                                                        fontSize: "1.4rem",
                                                    },
                                                    "& td": {
                                                        fontSize: "1.4rem",
                                                    }
                                                }}
                                                hover
                                                onClick={(event) => handleClick(event, row.invoiceNumber)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={`${row.invoiceDate}${index}`}
                                                selected={isItemSelected}
                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="normal"
                                                >
                                                    {row.invoiceDate}
                                                </TableCell>
                                                <TableCell align="left">{row.customer.name}</TableCell>
                                                <TableCell align="left">{row.invoiceNumber}</TableCell>
                                                <TableCell align="left">{row.status}</TableCell>
                                                <TableCell align="right">{row.balance}</TableCell>
                                                <TableCell align="right">{row.totalAmount}</TableCell>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={4} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </>
    );
}
