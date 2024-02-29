import { Breadcrumbs, Link, Typography } from "@mui/material";

const GoodsList = () => {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Домашняя страница
                </Link>
                <Typography color="text.primary">Товары</Typography>
            </Breadcrumbs>
        </div>
    );
};

export default GoodsList;
