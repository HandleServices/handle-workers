import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Select>
        <SelectTrigger className="w-[280px] h-12">
          <SelectValue placeholder="Selecione sua profissão" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Cabeleleiro">Cabeleleiro</SelectItem>
          <SelectItem value="Eletricista">Eletricista</SelectItem>
          <SelectItem value="Montador">Montador</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
