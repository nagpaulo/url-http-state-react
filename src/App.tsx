import { PlusCircle, Search } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"

function App() {

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do pedido"/>
          <Input name="name" placeholder="Nome do pedido"/>
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      <div className="border rounded-lg p-2">
      <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10}).map((_,i) => {
              return (
                <TableRow>
                  <TableCell>8hajshdjhashdjh1827381</TableCell>
                  <TableCell>Produto ${i}</TableCell>
                  <TableCell>180,99</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
