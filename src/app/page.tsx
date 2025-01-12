import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Droplet,
  Apple,
  Utensils,
  Leaf,
  Scale,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Mumuca Diet - Página Inicial" };

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-[#4f46e5]" />
          <span className="ml-2 text-xl font-bold text-[#4f46e5]">
            Mumuca Diet
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#cta"
          >
            Começar
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#4f46e5]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Não sobreviva para comer, coma para viver
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Transforme sua relação com a comida e alcance seus objetivos
                  de saúde com nossa plataforma de dieta totalmente gratuita.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#cta">
                  <Button className="bg-white text-[#4f46e5] hover:bg-gray-100">
                    Comece Agora - 100% Grátis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#4f46e5]">
              Recursos Incríveis para sua Jornada de Saúde
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Apple className="mr-2 text-[#4f46e5]" />
                    Controle de Macronutrientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Monitore proteínas, carboidratos e gorduras com precisão para
                  uma dieta balanceada.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Droplet className="mr-2 text-[#4f46e5]" />
                    Controle de Água
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Acompanhe sua hidratação diária para manter-se saudável e
                  energizado.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 text-[#4f46e5]" />
                    Controle de Calorias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Gerencie sua ingestão calórica para atingir seus objetivos de
                  peso.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Utensils className="mr-2 text-[#4f46e5]" />
                    Controle de Refeições
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Registre e analise suas refeições para manter uma alimentação
                  equilibrada.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="mr-2 text-[#4f46e5]" />
                    Controle de Nutrientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Acompanhe vitaminas e minerais essenciais para uma saúde
                  ótima.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="mr-2 text-[#4f46e5]" />
                    Controle de Peso e Altura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Monitore seu progresso físico ao longo do tempo.
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <ClipboardList className="mr-2 text-[#4f46e5]" />
                    Plano de Dieta Personalizado
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Receba um plano de dieta adaptado às suas necessidades e
                  objetivos específicos.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#4f46e5]"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Comece Sua Jornada de Saúde Hoje
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  Junte-se a milhares de pessoas que já transformaram suas vidas
                  com nossa plataforma 100% gratuita.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-white text-[#4f46e5] hover:bg-gray-100">
                  Cadastre-se Gratuitamente
                </Button>
                <p className="text-xs text-gray-200">
                  Sem custos ocultos. Sem cartão de crédito necessário. Cancele
                  quando quiser.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2025 Mumuca Diet. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
