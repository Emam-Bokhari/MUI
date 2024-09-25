import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment } from "react";

export default function TableComponent() {
  return (
    <Fragment>
      {/* basic table */}
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 700, margin: "auto", marginTop: 10 }}
      >
        <Table sx={{ maxWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Calories</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Fat (g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Carbs (g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell>237</TableCell>
              <TableCell>9</TableCell>
              <TableCell>37</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell>262</TableCell>
              <TableCell>16</TableCell>
              <TableCell>24</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gingerbread</TableCell>
              <TableCell>356</TableCell>
              <TableCell>16</TableCell>
              <TableCell>49</TableCell>
              <TableCell>3.9</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* dense table (size) */}
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 700, margin: "auto", marginTop: 10 }}
      >
        <Table sx={{ maxWidth: 700 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Calories</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Fat (g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Carbs (g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell>237</TableCell>
              <TableCell>9</TableCell>
              <TableCell>37</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell>262</TableCell>
              <TableCell>16</TableCell>
              <TableCell>24</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gingerbread</TableCell>
              <TableCell>356</TableCell>
              <TableCell>16</TableCell>
              <TableCell>49</TableCell>
              <TableCell>3.9</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* sticky header*/}
      <TableContainer
        component={Paper}
        sx={{ width:"100%",maxHeight:440, margin: "auto", marginTop: 10 }}
      >
        <Table stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Calories</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Fat (g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Carbs (g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell>237</TableCell>
              <TableCell>9</TableCell>
              <TableCell>37</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell>262</TableCell>
              <TableCell>16</TableCell>
              <TableCell>24</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gingerbread</TableCell>
              <TableCell>356</TableCell>
              <TableCell>16</TableCell>
              <TableCell>49</TableCell>
              <TableCell>3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell>262</TableCell>
              <TableCell>16</TableCell>
              <TableCell>24</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gingerbread</TableCell>
              <TableCell>356</TableCell>
              <TableCell>16</TableCell>
              <TableCell>49</TableCell>
              <TableCell>3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell>262</TableCell>
              <TableCell>16</TableCell>
              <TableCell>24</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gingerbread</TableCell>
              <TableCell>356</TableCell>
              <TableCell>16</TableCell>
              <TableCell>49</TableCell>
              <TableCell>3.9</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </Fragment>
  );
}
