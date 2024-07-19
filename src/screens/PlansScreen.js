import React, { useState, useEffect } from 'react';
import './PlansScreen.css';
import { collection, query, where, getDocs, doc, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { selectUser } from '../features/userSlice';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsQuery = query(collection(db, 'products'), where('active', '==', true));
                const querySnapshot = await getDocs(productsQuery);
                const products = {};
                querySnapshot.forEach(async productDoc => {
                    products[productDoc.id] = productDoc.data();
                    const pricesCollection = collection(productDoc.ref, 'prices');
                    const priceSnap = await getDocs(pricesCollection);
                    priceSnap.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        };
                    });
                });
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, []);

    console.log(products);

    const loadCheckout = async (priceId) => {
        try {
            const docRef = await addDoc(collection(doc(collection(db, 'customers'), user.uid), "checkout_sessions"), {
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin
            });

            onSnapshot(docRef, async (snap) => {
                const { error, sessionId } = snap.data();
                if (error) {
                    alert(`An error occurred: ${error.message}`);
                    return;
                }
                if (sessionId) {
                    const stripe = await loadStripe('pk_test_51PaDntA6Mxj4ktw2OmKCcUOpO8WFJQV3bSOqlmIPTK38gpZTFI02CN9zJdYxT7CwGfcBo8cY0RHV4KdUNI180ipk00tfoRYCRj');
                    stripe.redirectToCheckout({ sessionId });
                }
            });
        } catch (error) {
            console.error("Error starting checkout session: ", error);
        }
    }

    return (
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => (
                <div className='plansScreen_plan' key={productId}>
                    <div className='plansScreen_info'>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                </div>
            ))}
        </div>
    );
}

export default PlansScreen;
