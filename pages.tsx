import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, GamepadIcon, Home, User } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
              raitako.com
            </h1>
          </div>
          <nav className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Home className="h-4 w-4 mr-2" />
              トップ
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              プロフィール
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              リンク集
            </Button>
          </nav>
        </div>
      </header>
      <main className="container px-4 py-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ようこそ！</CardTitle>
              <CardDescription>
                raitako-1のホームページにようこそ。別名(宮堂雨司,ぴーちゃん,raitaro-1号ぅ)。
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GamepadIcon className="mr-2 h-4 w-4" />
                  Minecraft サーバー
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/minecraft">raitako-1のminecraft</a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/server-status">server status</a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ブログ & その他</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/spiff">spiff作成はこちらから</a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/diary">日記はこちらから</a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/old">追いやったやつ</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>おすすめ動画</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Rick Astley - Never Gonna Give You Up"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          © 2024 raitako.com - All rights reserved.
        </div>
      </footer>
    </div>
  )
}