import os
import glob

def optimiser_fichiers_force():
    fichiers_html = glob.glob("*.html")
    print(f"Analyse de {len(fichiers_html)} fichiers...")

    css_line = '<link rel="stylesheet" href="mobile.css">\n'
    viewport_line = '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'

    for fichier in fichiers_html:
        try:
            with open(fichier, 'r', encoding='utf-8') as f:
                contenu = f.readlines()
            
            # Vérification de l'état actuel du fichier
            a_viewport = any("viewport" in ligne for ligne in contenu)
            a_css = any("mobile.css" in ligne for ligne in contenu)

            # Si tout est déjà là, on passe
            if a_viewport and a_css:
                print(f"Déjà complet : {fichier}")
                continue
            
            # Préparation des lignes à ajouter
            lignes_a_ajouter = []
            
            if not a_viewport:
                lignes_a_ajouter.append('    \n')
                lignes_a_ajouter.append(viewport_line)
            
            if not a_css:
                lignes_a_ajouter.append('    \n')
                lignes_a_ajouter.append(css_line)

            # Insertion après la balise <head>
            nouveau_contenu = []
            head_trouve = False
            
            for ligne in contenu:
                nouveau_contenu.append(ligne)
                if "<head>" in ligne.lower() and not head_trouve:
                    nouveau_contenu.extend(lignes_a_ajouter)
                    head_trouve = True
            
            if head_trouve:
                with open(fichier, 'w', encoding='utf-8') as f:
                    f.writelines(nouveau_contenu)
                print(f"Mise à jour (CSS ajouté) : {fichier}")
            else:
                print(f"Attention : Pas de balise <head> dans {fichier}")

        except Exception as e:
            print(f"Erreur sur {fichier}: {e}")

if __name__ == "__main__":
    optimiser_fichiers_force()
    input("\nAppuyez sur Entrée pour quitter...")