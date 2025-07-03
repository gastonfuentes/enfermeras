import React from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function TestShadcn() {
  return (
    <div className="p-8 space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Configuración shadcn/ui</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              ✅ shadcn/ui configurado correctamente
            </p>
            <div className="flex gap-2">
              <Button variant="default">Botón Primary</Button>
              <Button variant="outline">Botón Outlineeee</Button>
              <Button variant="secondary">Botón Secondaryyyy</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
