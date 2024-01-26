export default function TabButton({children,onSelect,isSelected}){/*koriscen je children props , koji nam omogucava da unutar komponente dodajemo elemente
                                                umesto da smo pisali props, pa u buttonu props.children iskoristili smo laksi metod gde smo u 
                                                viticastim zagradama stavili taj props children*/
    return(
       <li><button className={isSelected ?  "active" : undefined} onClick={onSelect}>{children}</button></li> /*onSelect jeste props koji prihvata funkciju koja je kreirana u komponenti gde je pozvana TabButton komponenta */
    );/**isSelected props smo kreirali zbog dinamicke klase. Ako tamo gde pozivamo komponentu TabButton postoji isSelected klasa "active"
    ce se primeniti na button ako ne postoji onda nece */

    
}